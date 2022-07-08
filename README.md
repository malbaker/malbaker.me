# **Malik's Portfolio Site**

This portfolio website allows users to learn more about me, such as education, work experience, projects, skills, and hobbies.

## My Stack

This website was built using HTML, Jinja2, CSS, and Javascript on the front-end, and the back-end was built using Python and Flask. 


## Getting Started

The first step is to clone the repository onto your local machine:
```bash
$ git clone https://github.com/malbaker/malbaker.me.git
```

Now follow the installation and usage steps below to render the website!

## Installation

Make sure you have python3 and pip installed

Create and activate virtual environment using venv. We will call our virtual environment `venv` for simplicity:
```bash
$ python -m venv venv
$ source venv/bin/activate
```
Before you install dependencies, you might need to uprade pip to the latest available version. You can do this by running the command:

```bash
$ pip install --upgrade pip
```


Now use [pip](https://pip.pypa.io/en/stable/) to install all the dependencies for our app!

```bash
$ pip install -r requirements.txt
```

## Usage

Now check out the main branch if you aren’t already on it:
```bash
$ git checkout main
```

Create a .env file based off the `example.env` provided and define the variable: `URL=localhost:5000` for running the site locally.

Start flask development server (method 1):
```bash
$ export FLASK_ENV=development
$ flask run
```
(method 2) Instead of exporting the Flask environment variable every time you need to run locally, you can add the `FLASK_ENV` variable into your `.env` file for example:

```bash
# .env
URL=localhost:5000
FLASK_ENV=development
```

You should get a response like this in the terminal:
```
$ flask run
 * Environment: development
 * Debug mode: on
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

You'll now be able to access the website at `localhost:5000` or `127.0.0.1:5000` in the browser! 

*Note: The portfolio site will only work on your local machine while you have it running inside of your terminal.* 

## Troubleshooting

1. Make sure that you do not have any other environments open in the background when creating the virtual environment. This will prevent you from rendering the site. 

2. If the localhost:5000/ is in use then make sure to kill the application that is using the local server in the background or change the port to another by modifying the URL variable in the .env file to run on a different port(Ex: URL=localhost:5001 instead of URL=localhost:5000)

## Contributing

Contributions to this project are [released](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license) to the public under the [project's open source license](LICENSE).

This is an open source project under the MIT license. Feel free to take inspiration or make contributions as you see fit.
