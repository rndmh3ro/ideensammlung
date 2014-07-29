"""create status rowCREATE TABLE alembic_version (
	version_num VARCHAR(32) NOT NULL
);


Revision ID: 381b8d24b88c
Revises: None
Create Date: 2014-07-27 14:30:20.725976

"""

# revision identifiers, used by Alembic.
revision = '381b8d24b88c'
down_revision = None

from alembic import op
import sqlalchemy as sa


def upgrade():
    op.add_column('ideas', sa.Column('status', sa.String(length=20), nullable=False, server_default="new"))


def downgrade():
    pass
