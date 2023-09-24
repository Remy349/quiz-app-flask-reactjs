from marshmallow import Schema, fields

# --- PLAIN SCHEMAS


class PlainAnswerSchema(Schema):
    id = fields.Int(dump_only=True)
    text = fields.Str(required=True)
    is_correct = fields.Bool(dump_only=True)


class PlainQuizSchema(Schema):
    id = fields.Int(dump_only=True)
    title = fields.Str(required=True)
    description = fields.Str(required=True)


class PlainQuestionSchema(Schema):
    id = fields.Int(dump_only=True)
    title = fields.Str(required=True)
    answers = fields.List(fields.Nested(PlainAnswerSchema()), dump_only=True)


# --- SCHEMAS


class QuestionSchema(PlainQuestionSchema):
    quiz_id = fields.Int(required=True, load_only=True)
    quiz = fields.Nested(PlainQuizSchema(), dump_only=True)


class AnswerSchema(PlainAnswerSchema):
    question_id = fields.Int(required=True, load_only=True)
    question = fields.Nested(PlainQuestionSchema(), dump_only=True)


class QuizSchema(PlainQuizSchema):
    questions = fields.List(
        fields.Nested(PlainQuestionSchema()),
        dump_only=True,
    )
