# horus-second-challenge

This project is based on Nodejs and express, It uses postgresql as its database. Also it uses graphql to make requests to server
This project is on fly.io server `horusproject.fly.dev`


Get projects (projects) `horusproject.fly.dev/graphql`

where you can get the following data as an array:
* Id
* Name


Get project (project) `horusproject.fly.dev/graphql`

Where you can get the following data as an array:
* Id (of the project)
* device_id
* name
* code
* type
* status


Create project (createProject) `horusproject.fly.dev/graphql`

Where you can create a new project with the following data:
* name 


Get devices (devices) `horusproject.fly.dev/graphql`

Where you can get all created devices with the following data as an array:
* project_id
* code
* type
* status
Note: You must pass project_id to get all devices


Get device (device) `horusproject.fly.dev/graphql`

Where you can get only one created device, You must pass project_id and device.id, and so you can get with the following data:
* project_id
* code
* type
* status


Create device (createDevice) `horusproject.fly.dev/graphql`

Where you can create a new device:
* project_id (requiered)
* code (not null, unique)
* type
* status
