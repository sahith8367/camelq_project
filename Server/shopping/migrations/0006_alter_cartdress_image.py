# Generated by Django 3.2.25 on 2025-07-03 07:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shopping', '0005_cartdress'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cartdress',
            name='image',
            field=models.ImageField(max_length=500, upload_to=''),
        ),
    ]
