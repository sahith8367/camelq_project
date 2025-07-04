from django.db import models

# Create your models here.
class Dress(models.Model):
    name = models.CharField(max_length=100)
    cost = models.CharField(max_length=15)
    color = models.CharField(max_length=100)
    about = models.CharField(max_length=400)
    image = models.ImageField(upload_to="teacher/",blank=True , null=True)



class WomenDress(models.Model):
    name = models.CharField(max_length=100)
    cost = models.CharField(max_length=15)
    color = models.CharField(max_length=100)
    about = models.CharField(max_length=400)
    image = models.ImageField(upload_to="teacher/",blank=True , null=True)

class Kids(models.Model):
    name = models.CharField(max_length=100)
    cost = models.CharField(max_length=15)
    color = models.CharField(max_length=100)
    about = models.CharField(max_length=400)
    image = models.ImageField(upload_to="teacher/",blank=True , null=True)

class Beauty(models.Model):
    name = models.CharField(max_length=100)
    cost = models.CharField(max_length=15)
    color = models.CharField(max_length=100)
    about = models.CharField(max_length=400)
    image = models.ImageField(upload_to="teacher/",blank=True , null=True)

class FootWear(models.Model):
    name = models.CharField(max_length=100)
    cost = models.CharField(max_length=15)
    color = models.CharField(max_length=100)
    about = models.CharField(max_length=400)
    image = models.ImageField(upload_to="teacher/",blank=True , null=True)

class Grocery(models.Model):
    name = models.CharField(max_length=100)
    cost = models.CharField(max_length=15)
    quantity = models.CharField(max_length=100)
    image = models.ImageField(upload_to="teacher/",blank=True , null=True)

    
# Cart Dresses 
class CartDress(models.Model):
    name = models.CharField(max_length=100)
    cost = models.CharField(max_length=15)
    color = models.CharField(max_length=100)
    about = models.CharField(max_length=400)
    image = models.ImageField(upload_to="teacher/",blank=True , null=True)

class Liked(models.Model):
    name = models.CharField(max_length=100)
    cost = models.CharField(max_length=15)
    color = models.CharField(max_length=100)
    about = models.CharField(max_length=400)
    image = models.CharField(max_length=500)

class Cart(models.Model):
    name = models.CharField(max_length=100)
    cost = models.CharField(max_length=15)
    color = models.CharField(max_length=100)
    about = models.CharField(max_length=400)
    image = models.CharField(max_length=500)