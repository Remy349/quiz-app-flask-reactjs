from flaskr.extensions import db
from flask_smorest import abort
from sqlalchemy.exc import SQLAlchemyError

from flaskr.models import QuizModel


class QuizController:
    def get_quizzes(self):
        return db.session.execute(db.select(QuizModel)).scalars()

    def create_quiz(self, quiz_data):
        quiz = QuizModel(**quiz_data)

        try:
            db.session.add(quiz)
            db.session.commit()
        except SQLAlchemyError as e:
            abort(500, message=str(e))

        return {}
