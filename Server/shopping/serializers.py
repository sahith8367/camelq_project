# your_app_name/serializers.py
from rest_framework import serializers
from .models import Dress, WomenDress, Kids, Beauty, FootWear,Grocery,CartDress,Cart,Liked

# Remember to fix the __str__ method in FootWear model for self.subject

class DressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dress
        fields = '__all__' # Or specify individual fields: ['id', 'name', 'cost', 'color', 'about', 'image']

class WomenDressSerializer(serializers.ModelSerializer):
    class Meta:
        model = WomenDress
        fields = '__all__'

class KidsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kids
        fields = '__all__'

class BeautySerializer(serializers.ModelSerializer):
    class Meta:
        model = Beauty
        fields = '__all__'

class FootWearSerializer(serializers.ModelSerializer):
    class Meta:
        model = FootWear
        fields = '__all__'

class GrocerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Grocery
        fields = '__all__'
    
class CartDressSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartDress
        fields = '__all__'
    
class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'
    
class LikedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Liked
        fields = '__all__'