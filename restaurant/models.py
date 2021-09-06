from django.db import models

# Create your models here.
class Ingredient(models.Model):
    name = models.CharField(max_length="50", verbose_name="Ingredient Name")
    quantity = models.FloatField(verbose_name="Quantity of Ingredients", default=0)
    unit = models.CharField(max_length="20", verbose_name="Ingredient Unit Measurement")
    price = models.DecimalField(decimal_places="2", verbose_name="Price Per Unit of Ingredient", default=0.00)

    class Meta:
        verbose_name_plural = "Ingredients"

class MenuItem(models.Model):
    title = models.CharField(max_length="100", verbose_name="Dish Name")
    price = models.DecimalField(decimal_places="2", verbose_name="Price for Dish", default=0.00)

    class Meta:
        verbose_name_plural = "Menu Dishes"

class RecipeRequirement(models.Model):
    menu_item = models.ForeignKey(MenuItem, verbose_name="Dish Name", on_delete=models.CASCADE)
    ingredient = models.ForeignKey(Ingredient, verbose_name"Dish Ingredient", on_delete=models.CASCADE)
    quantity = models.FloatField(verbose_name="Quantity of Ingredient Required", default=0)

    class Meta:
        verbose_name_plural = "Recipe Requirements"