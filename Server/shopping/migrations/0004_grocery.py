# Generated by Django 3.2.25 on 2025-06-26 23:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shopping', '0003_auto_20250626_1432'),
    ]

    operations = [
        migrations.CreateModel(
            name='Grocery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('cost', models.CharField(max_length=15)),
                ('quantity', models.CharField(max_length=100)),
                ('image', models.ImageField(blank=True, null=True, upload_to='teacher/')),
            ],
        ),
    ]
