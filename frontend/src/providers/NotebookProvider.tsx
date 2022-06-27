import _ from "lodash";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import {
  Cell,
  CellId,
  createNotebook,
  Notebook,
  setCellContent,
  setCellOutputs,
  setCellState
} from "../types/notebooks";
import { useNotebookEvent } from "./NotebookConnectionProvider";
import { useReportContext } from "./ReportProvider";


const NotebookContext = React.createContext<{
  notebook: Notebook | null,
  setNotebook: (notebook: Notebook) => void,
  setCell: (cell: Cell) => void,
  changed: boolean,
  save: () => void,
  isSaving: boolean,
  isFetching: boolean,
}>(null);


export const NotebookProvider = (props: {
  children: React.ReactNode,
}) => {
  const { children, } = props;
  const [ changed, setChanged ] = React.useState(false);

  const [ notebook, setNotebookInternal ] = React.useState<Notebook | null>(null);
  const notebookRef = useRef<Notebook | null>(null);

  const setNotebook = useCallback((notebook: Notebook) => {
    setNotebookInternal(notebook);
    notebookRef.current = notebook;
  }, []);

  const setCell = useCallback((cell: Cell) => {
    setNotebook(setCellContent(notebookRef.current!, cell.metadata.id, cell));
  }, []);

  const { report, isSaving, isFetching, save: saveReport } = useReportContext();
  const save = () => {
    // TODO: Save notebook
    saveReport({
      ...report,
      notebook: notebookRef.current,
    });
  }

  useEffect(() => {
    if (!isFetching) {
      if (report?.notebook) {
        setNotebook(report.notebook);
      } else {
        setNotebook(createNotebook('Untitled notebook'));
      }
    }
  }, [ report === null, isFetching ]);

  useEffect(() => {
    if (notebookRef.current && report.notebook) {
      const changedLocal = !_.isEqual(notebookRef.current, report.notebook);
      console.log(notebookRef.current, report.notebook)
      if (changedLocal !== changed) {
        setChanged(changedLocal);
      }
    }
  }, [ !changed ? report?.notebook?.content : null, !changed ? notebook : null, isSaving ]);

  useNotebookEvent('CELL_RESULT', (data: any) => {
    setNotebook(setCellOutputs(notebookRef.current, data.cell_id, data.outputs));
    console.debug('Added cell result', notebookRef.current);
  }, []);

  useNotebookEvent('CELL_STATE', (data: any) => {
    setNotebook(setCellState(notebookRef.current, data.cell_id, data.state));
    console.debug('Added cell state', notebookRef.current);
  }, []);

  const onKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    let charCode = String.fromCharCode(event.which).toLowerCase();
    if ((event.ctrlKey || event.metaKey) && charCode === 's') {
      event.preventDefault();
      save();
    }
  }, [])

  const contextValue = useMemo(() => ({
    notebook, setNotebook, setCell, changed, save, isSaving, isFetching,
  }), [ notebook, changed, isSaving, isFetching ]);

  return (
    <NotebookContext.Provider value={contextValue}>
      <div onKeyDown={onKeyDown}>
        {children}
      </div>
    </NotebookContext.Provider>
  );
}

export const useNotebookContext = () => {
  const context = React.useContext(NotebookContext);
  if (context === null) {
    throw new Error('useContext must be used within a Provider');
  }
  return context;
};