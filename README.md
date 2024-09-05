# To see if server is live .. try this 
**https://backend-1v0u.onrender.com/form/test**

# there are 2 GET endpoints 
## /form/projects .. returns the json of all project data 

like following

![Screenshot 2024-09-05 213819](https://github.com/user-attachments/assets/0c903484-485d-4497-8f05-5dd7d0eb91bf)


**second get endpoint is -**
## /form/projects/:id, it takes an id of Object_id tpye returned by mongoDB
**similar to /projects endpoint, this return the data of a particular project you need ..**

# The two post endpoints

## /form/submit, 
**it takes a complete object as same as mongo schema, including project_name, organization, about ... etc, plz see the mongo schema**

## /projects/vote
**It takes project id, image index and option you want to updat in the db**

It is tested and working

# Mongo Schema --->

![Screenshot 2024-09-05 213550](https://github.com/user-attachments/assets/90ee8bb2-9808-4f37-8536-810c285bff08)
