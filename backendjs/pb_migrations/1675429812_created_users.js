migrate((db) => {
  const collection = new Collection({
    "id": "ktdovo5g0pmi4ju",
    "created": "2023-02-03 13:10:12.218Z",
    "updated": "2023-02-03 13:10:12.218Z",
    "name": "users",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qxodylx7",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ktdovo5g0pmi4ju");

  return dao.deleteCollection(collection);
})
