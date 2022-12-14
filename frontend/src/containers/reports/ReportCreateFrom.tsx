import {
  Button
} from "@mui/material"
import { AxiosResponse } from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DatasetSelectInput } from "../../components/input/DatasetSelectInput";
import { FormContainer } from "../../components/layout/FormContainer";
import { useApi } from "../../hooks/useApi";
import useNotification from "../../hooks/useNotification";
import * as yup from 'yup';
import { createNotebook } from "../../types/notebooks";
import { Report } from "../../types/reports";


export const ReportCreateForm = (props: {
  onClose: (created: boolean) => void;
}) => {
  const navigate = useNavigate();
  const [ loading, setLoading ] = useState(false);
  const { sendNotification } = useNotification();
  const {
    onClose,
  } = props;

  const validationSchema = yup.object({});

  const apiClient = useApi();

  const formik = useFormik<Partial<Report>>({
    initialValues: {
      dataset: undefined,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);

      try {
        const result: AxiosResponse<Report> = await apiClient.post('/reports/', {
          dataset: values.dataset.id,
          notebook: createNotebook('Untitled Report')
        })

        if (result) {
          if (result.status === 201) {
            sendNotification({
              message: "Report created",
              variant: "success"
            })
            onClose(true);
            await navigate(`/report/${result.data.id}`);
          } else {
            sendNotification({
              message: "Error creating report",
              variant: "error"
            })
          }
        }
      } catch (e) {
        console.error(e);
      }

      setLoading(false);
    },
  });


  return (
    <FormContainer
      form={formik}
      actions={<>
        <Button variant="contained" type="submit">Submit</Button>
      </>}
    >
      <DatasetSelectInput
        onValueChange={(dataset) => dataset.length && formik.setFieldValue('dataset', dataset[0])}
      />
    </FormContainer>
  )
}
