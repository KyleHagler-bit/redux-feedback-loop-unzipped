# Redux-Feedback-Loop

## Description
For this project, students were tasked with making a form similar to their daily reflection form.
That is, the app cycles through four screens prompting the user for a numerical or text input to track their feedback.
![feeling form](Readme_images/feeling.png?raw=true)
![comments form](./Readme_images/comments.jpg?raw=true)
The fifth page then has the user review the information they previously entered.
If they feel like the information is correct, they can submit the information which then gets transferred to the database.
![review form](Readme_images/review.png)
This then takes the user to a thank you page where they can choose to leave another feedback form if they like.

An admin page was also added where authorized users can review the submitted data. For now anyone with the link ```http://localhost:3000/#/admin ``` can visit this page.
![admin page](./Readme_images/admin.png)

### STRETCH GOALS
[] add back buttons to form (while remembering data)

[X] add Admin page
  [X] ability to delete entries
  [] ability to flag entries
  [] SweetAlert confirmation for deletes

[X] additional styling (Material UI)

[] Heroku Deploy

## Prerequisites
Node.js

## Installation
Create database titled ``` prime_feedback```
See data.sql for further information on creating a database.

## Built With
React
Redux
Material UI

## License
MIT

## Acknowledgement
Thanks to Emerging Digital Academy for this practice! I think I may be getting Redux down.

## Support
If you have suggestions or issues, please email me at khagler.kh@gmail.com