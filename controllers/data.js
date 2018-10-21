

// Create and Save a new Note
exports.postData = (req, res) => {
  // Validate request to post the data
  console.log(req.body);
};
// Retrieve and return all notes from the database.
exports.getData = (req, res) => {
  console.log("Get All the Data here!!")
  res.send("Getting data");
  res.end();
};

// Delete a note with the specified noteId in the request
exports.deleteData = (req, res) => {
  console.log(req.params.Id)
};
