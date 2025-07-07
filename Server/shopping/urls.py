# your_app_name/urls.py
from django.urls import path
from .views import (
    DressListCreateView, DressDetailView,
    WomenDressListCreateView, WomenDressDetailView,
    KidsListCreateView, KidsDetailView,
    BeautyListCreateView, BeautyDetailView,
    FootWearListCreateView, FootWearDetailView,
    GroceryListCreateView , GroceryDetailView,
    CartDressListCreateView,CartDressDetailView,
    CartListCreateView,CartDetailView,
    LikedDetailView,LikedListCreateView,
    GroceryCartView,GroceryCartCreate,
    GroceryLikedCreate,GroceryLikedListView

)

urlpatterns = [
    # Dress URLs
    path('dresses/', DressListCreateView.as_view(), name='dress-list-create'),
    path('dresses/<int:pk>/', DressDetailView.as_view(), name='dress-detail'),

    # WomenDress URLs
    path('womendresses/', WomenDressListCreateView.as_view(), name='womendress-list-create'),
    path('womendresses/<int:pk>/', WomenDressDetailView.as_view(), name='womendress-detail'),

    # Kids URLs
    path('kids/', KidsListCreateView.as_view(), name='kids-list-create'),
    path('kids/<int:pk>/', KidsDetailView.as_view(), name='kids-detail'),

    # Beauty URLs
    path('beauty/', BeautyListCreateView.as_view(), name='beauty-list-create'),
    path('beauty/<int:pk>/', BeautyDetailView.as_view(), name='beauty-detail'),

    # FootWear URLs
    path('footwear/', FootWearListCreateView.as_view(), name='footwear-list-create'),
    path('footwear/<int:pk>/', FootWearDetailView.as_view(), name='footwear-detail'),

    #Grocery URLs
    path('Grocery/', GroceryListCreateView.as_view(), name='Groceryr-list-create'),
    path('Grocery/<int:pk>/', GroceryDetailView.as_view(), name='Grocery-detail'),

    #Cart 

    path('cartdress/', CartDressListCreateView.as_view(), name='cartdress-list-create'),
    path('cartdress/<int:pk>/', CartDressDetailView.as_view(), name='cartdress-detail'),

    path('carts/', CartListCreateView.as_view(), name='carts'),
    path('carts/<int:pk>/', CartDetailView.as_view(), name='carts'),

    path('liked/', LikedListCreateView.as_view(), name='liked'),
    path('liked/<int:pk>/', LikedDetailView.as_view(), name='liked'),

    path('grocerycart/',GroceryCartCreate.as_view(),name='grocery cart'),
    path('grocerycart/<int:pk>/',GroceryCartView.as_view(),name='grocery name'),

    path('groceryliked/' ,GroceryLikedCreate.as_view(),name='grocery'),
    path('groceryliked/<int:pk>/',GroceryLikedListView.as_view(),name='grocery liked'),

]