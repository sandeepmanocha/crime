const tables = {
    "name_basics": {
        "table": "crime",
        "dataset": dataform.projectConfig.vars.SOURCE_DATASET,
        "project": dataform.projectConfig.vars.SOURCE_PROJECT,
    }
}


function declare_tables(mapping) {
    Object.keys(mapping).forEach(table => {
        dataform.declare({
            database: mapping[table]["project"],
            schema: mapping[table]["dataset"],
            name: mapping[table]["table"]
        });
    });
}
 
declare_tables(tables)