"""Generate the code reference pages."""

from pathlib import Path

import mkdocs_gen_files

nav = mkdocs_gen_files.Nav()

for path in sorted(Path("backend").rglob("*.py")):  #
    module_path = path.relative_to("backend").with_suffix("")  #
    doc_path = path.relative_to("backend").with_suffix(".md")  #
    full_doc_path = Path("reference", doc_path)  #

    parts = list(module_path.parts)

    if parts[-1] == "__init__":  #
        parts = parts[:-1]
        doc_path = doc_path.with_name("index.md")
        full_doc_path = full_doc_path.with_name("index.md")
    elif parts[-1] == "__main__":
        continue

    if set(parts).intersection({'urls', 'migrations', 'routing', 'manage', 'asgi', 'celery', 'wsgi', 'backend', 'frontend'}):
        continue

    nav[parts] = doc_path.as_posix()

    with mkdocs_gen_files.open(full_doc_path, "w") as fd:  #
        identifier = ".".join(parts)  #
        print(f"::: {identifier}\
            \n\tundoc-members: true", file=fd)  #

    mkdocs_gen_files.set_edit_path(full_doc_path, path)  #

with mkdocs_gen_files.open("reference/SUMMARY.md", "w") as nav_file:  #
    nav_file.writelines(nav.build_literate_nav())

with mkdocs_gen_files.open("CONTRIBUTING.md", "w") as file:
    print("--8<-- '.github/CONTRIBUTING.md'", file=file)
