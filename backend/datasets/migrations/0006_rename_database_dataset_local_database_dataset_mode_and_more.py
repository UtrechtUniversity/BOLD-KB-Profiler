# Generated by Django 4.0.6 on 2022-07-21 13:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('datasets', '0005_dataset_import_task_dataset_state'),
    ]

    operations = [
        migrations.RenameField(
            model_name='dataset',
            old_name='database',
            new_name='local_database',
        ),
        migrations.AddField(
            model_name='dataset',
            name='mode',
            field=models.CharField(choices=[('IMPORTED', 'Imported locally '), ('SPARQL', 'From SPARQL endpoint')], default='IMPORTED', max_length=255),
        ),
        migrations.AddField(
            model_name='dataset',
            name='search_mode',
            field=models.CharField(choices=[('IMPORTED', 'Imported locally '), ('WIKIDATA', 'From Wikidata')], default='IMPORTED', max_length=255),
        ),
        migrations.AlterField(
            model_name='dataset',
            name='state',
            field=models.CharField(choices=[('QUEUED', 'QUEUED'), ('IMPORTING', 'IMPORTING'), ('IMPORTED', 'IMPORTED'), ('FAILED', 'FAILED')], default='QUEUED', max_length=255),
        ),
    ]
