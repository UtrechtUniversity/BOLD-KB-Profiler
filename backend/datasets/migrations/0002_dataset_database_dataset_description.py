# Generated by Django 4.0.5 on 2022-06-16 21:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('datasets', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='dataset',
            name='database',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='dataset',
            name='description',
            field=models.TextField(blank=True),
        ),
    ]
