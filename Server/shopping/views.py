# your_app_name/views.py
from rest_framework import generics
from .models import Dress, WomenDress, Kids, Beauty, FootWear ,Grocery,CartDress,Cart,Liked,Grocerycart,GroceryLiked
from .serializers import (
    DressSerializer,
    WomenDressSerializer,
    KidsSerializer,
    BeautySerializer,
    FootWearSerializer,
    GrocerySerializer,
    CartDressSerializer,
    CartSerializer,
    LikedSerializer,
    GroceryCartSerializer,
    GroceryLikedSerializer
)

# Dress Views
class DressListCreateView(generics.ListCreateAPIView):
    queryset = Dress.objects.all()
    serializer_class = DressSerializer

class DressDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Dress.objects.all()
    serializer_class = DressSerializer

# WomenDress Views
class WomenDressListCreateView(generics.ListCreateAPIView):
    queryset = WomenDress.objects.all()
    serializer_class = WomenDressSerializer

class WomenDressDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = WomenDress.objects.all()
    serializer_class = WomenDressSerializer

# Kids Views
class KidsListCreateView(generics.ListCreateAPIView):
    queryset = Kids.objects.all()
    serializer_class = KidsSerializer

class KidsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Kids.objects.all()
    serializer_class = KidsSerializer

# Beauty Views
class BeautyListCreateView(generics.ListCreateAPIView):
    queryset = Beauty.objects.all()
    serializer_class = BeautySerializer

class BeautyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Beauty.objects.all()
    serializer_class = BeautySerializer

# FootWear Views
class FootWearListCreateView(generics.ListCreateAPIView):
    queryset = FootWear.objects.all()
    serializer_class = FootWearSerializer

class FootWearDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FootWear.objects.all()
    serializer_class = FootWearSerializer

#Grocery Views

class GroceryListCreateView(generics.ListCreateAPIView):
    queryset = Grocery.objects.all()
    serializer_class = GrocerySerializer

class GroceryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Grocery.objects.all()
    serializer_class = GrocerySerializer

class CartDressListCreateView(generics.ListCreateAPIView):
    queryset = CartDress.objects.all()
    serializer_class = CartDressSerializer

class CartDressDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CartDress.objects.all()
    serializer_class = CartDressSerializer

#Cart 
class CartListCreateView(generics.ListCreateAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

class CartDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

class LikedListCreateView(generics.ListCreateAPIView):
    queryset = Liked.objects.all()
    serializer_class = LikedSerializer

class LikedDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Liked.objects.all()
    serializer_class = LikedSerializer

class GroceryCartCreate(generics.ListCreateAPIView):
    queryset = Grocerycart.objects.all()
    serializer_class=GroceryCartSerializer

class GroceryCartView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Grocerycart.objects.all()
    serializer_class = GroceryCartSerializer

class GroceryLikedCreate(generics.ListCreateAPIView):
    queryset=GroceryLiked.objects.all()
    serializer_class=GroceryLikedSerializer

class GroceryLikedListView(generics.RetrieveUpdateDestroyAPIView):
    queryset=GroceryLiked.objects.all()
    serializer_class=GroceryLikedSerializer