# Generated by Django 3.2.25 on 2025-06-30 07:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shopping', '0004_grocery'),
    ]

    operations = [
        migrations.CreateModel(
            name='CartDress',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('cost', models.CharField(max_length=15)),
                ('color', models.CharField(max_length=100)),
                ('about', models.CharField(max_length=400)),
                ('image', models.ImageField(blank=True, null=True, upload_to='teacher/')),
            ],
        ),
    ]
