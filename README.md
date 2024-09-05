# there are 2 main get endpoints 
/form/projects .. returns the json of all project data 

like following
[
  {
    "_id": "66d8c6e83c003ffd8ad26af2",
    "project_name": "Pulsar",
    "about": "gud project, trust me",
    "category": "Classification",
    "conducting_org": "JEC JABALPUR",
    "qcategory": "Single Correct",
    "questions": [
      {
        "qid": 1,
        "question": "what is my name",
        "option": [
          "user",
          "User",
          "uSer",
          "useR"
        ],
        "_id": "66d8c6e83c003ffd8ad26af3"
      },
      {
        "qid": 2,
        "question": "best name for our team ?",
        "option": [
          "TheMissingSemicolon",
          "Lorem Ipsum",
          "Bhole Chature",
          "Code&Caffene",
          "Dont ask me!"
        ],
        "_id": "66d8c6e83c003ffd8ad26af4"
      }
    ],
    "ImageSet": [
      {
        "image_url": "https://firebasestorage.googleapis.com/v0/b/sih24-e5a26.appspot.com/o/uploads%2Fimages%2Fbw.jpg?alt=media&token=21799a85-8312-4ee4-b993-344d34569282",
        "votes": {
          "TheMissingSemicolon": 2
        },
        "_id": "66d8c6e83c003ffd8ad26af5"
      },
      {
        "image_url": "https://firebasestorage.googleapis.com/v0/b/sih24-e5a26.appspot.com/o/uploads%2Fimages%2Fcolor.jpg?alt=media&token=f4fc55c9-40bf-4a30-ba68-748c0f7cc322",
        "votes": {

        },
        "_id": "66d8c6e83c003ffd8ad26af6"
      },
      {
        "image_url": "https://firebasestorage.googleapis.com/v0/b/sih24-e5a26.appspot.com/o/uploads%2Fimages%2Fdes.jpg?alt=media&token=6ffece57-01c3-4400-9e6e-de56b9b454d1",
        "votes": {

        },
        "_id": "66d8c6e83c003ffd8ad26af7"
      },
      {
        "image_url": "https://firebasestorage.googleapis.com/v0/b/sih24-e5a26.appspot.com/o/uploads%2Fimages%2Fim.jpg?alt=media&token=6628728b-f8b6-4b5a-90e8-5c8956ad5fc6",
        "votes": {

        },
        "_id": "66d8c6e83c003ffd8ad26af8"
      }
    ],
    "tutorial": {
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in ligula nec mauris euismod tristique. Vivamus vitae porttitor orci, sed vestibulum enim. Proin id scelerisque purus. Vestibulum condimentum nibh turpis, quis laoreet nisi tempus vitae. Phasellus erat lectus, iaculis eu erat ut, viverra sollicitudin urna. Praesent venenatis metus vel arcu hendrerit finibus. Proin a placerat felis, non vulputate dui. Ut hendrerit mattis diam, et vulputate sapien facilisis id. Fusce convallis eleifend imperdiet. Proin imperdiet nibh nisi. Integer a blandit nunc.\n\nAenean iaculis urna vitae tellus porta, nec varius nibh faucibus. Duis scelerisque sit amet nunc quis feugiat. Cras luctus finibus metus eu tempus. Nulla vel sem sit amet sapien facilisis luctus sit amet sagittis mauris. Cras suscipit viverra mattis. Nulla vehicula scelerisque gravida. Suspendisse aliquet erat non purus bibendum feugiat.\n\nEtiam sodales, leo sed lobortis placerat, metus eros placerat sem, eu pellentesque justo tellus sed nisl. Quisque eu luctus nisi, et semper justo. Curabitur vitae iaculis velit. Maecenas mattis ligula turpis, a placerat massa posuere at. Fusce egestas non neque non porta. In dignissim libero nec augue gravida, eu imperdiet enim tincidunt. Nullam blandit vehicula dolor in ornare. Vivamus euismod commodo dolor at facilisis. Nam sit amet nibh accumsan, molestie risus eu, commodo augue. Vivamus ullamcorper pretium neque, a vehicula sapien lobortis non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec nec urna pretium massa ultricies luctus sed vel lacus. Vivamus pharetra nunc a augue semper, eget gravida diam tempus. Nullam vel ante id mauris placerat lacinia.",
      "vidurl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "_id": "66d8c6e83c003ffd8ad26af9"
    },
    "__v": 0
  }
]

second get endpoint is -
/form/projects/:id, it takes an id of Object_id tpye returned by mongoDB
similar to /projects endpoint, this return the data of a particular project you need ..

# The two post endpoints

/form/submit, 
it takes a complete object as same as mongo schema, including project_name, organization, about ... etc, plz see the mongo schema 

/projects/vote
It takes project id, image index and option you want to updat in the db

It is tested and working

# Mongo Schema --->

![Screenshot 2024-09-05 213550](https://github.com/user-attachments/assets/90ee8bb2-9808-4f37-8536-810c285bff08)
