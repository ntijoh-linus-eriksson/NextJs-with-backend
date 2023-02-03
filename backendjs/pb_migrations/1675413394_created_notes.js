migrate((db) => {
  const collection = new Collection({
    "id": "3gmkyrvlv1ag0iy",
    "created": "2023-02-03 08:36:34.353Z",
    "updated": "2023-02-03 08:36:34.353Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qog40b4l",
        "name": "title",
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
  const collection = dao.findCollectionByNameOrId("3gmkyrvlv1ag0iy");

  return dao.deleteCollection(collection);
})
