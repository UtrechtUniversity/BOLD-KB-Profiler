# Generated by Django 4.0.5 on 2022-06-16 22:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('contenttypes', '0002_remove_content_type_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='ModelTaskMeta',
            fields=[
                ('task_id', models.UUIDField(primary_key=True, serialize=False)),
                ('object_id', models.UUIDField()),
                ('state', models.PositiveIntegerField(choices=[(0, 'PENDING'), (1, 'STARTED'), (2, 'RETRY'), (3, 'FAILURE'), (4, 'SUCCESS')], default=0)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('content_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='contenttypes.contenttype')),
            ],
        ),
    ]
