import os
from flask import Flask, render_template, request
from telebot import TeleBot
from dotenv import load_dotenv

load_dotenv()

class Config:
    # setup Flask
    DEBUG = os.getenv("DEBUG", False)

    # custom setup
    BOT_TOKEN = os.getenv("BOT_TOKEN")
    CHAT_ID = os.getenv("CHAT_ID")


app = Flask(__name__)
app.config.from_object(Config())

bot = TeleBot(app.config["BOT_TOKEN"], parse_mode="html")

@app.route('/', methods=["GET", "POST"])
def index():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']
        bot.send_message(app.config["CHAT_ID"], f"\U0001F4E8 <b>New message</b>\n"
                                                f"Name: {name}\n"
                                                f"Email: {email}\n"
                                                f"<blockquote>{message}</blockquote>")

    return render_template('index.html')

if __name__ == '__main__':
    app.run()