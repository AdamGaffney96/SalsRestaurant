from django.db import models

# Create your models here.
class Ingredient(models.Model):
    name = models.CharField(max_length=50, verbose_name="Ingredient Name")
    quantity = models.FloatField(verbose_name="Quantity of Ingredients", default=0)
    unit = models.CharField(max_length=20, verbose_name="Ingredient Unit Measurement")
    price = models.DecimalField(max_digits=4, decimal_places=2, verbose_name="Price Per Unit of Ingredient", default=0.00)

    def __str__(self):
        return f"""
        Ingredient Name: {self.name},
        Quantity in Stock: {self.quantity},
        Units: {self.unit},
        Price Per Unit: {self.price}
        """

    class Meta:
        verbose_name_plural = "Ingredients"

class MenuItem(models.Model):
    title = models.CharField(max_length=100, verbose_name="Dish Name")
    price = models.DecimalField(max_digits=5, decimal_places=2, verbose_name="Price for Dish", default=0.00)

    def __str__(self):
        return f"""
        Dish Name: {self.title},
        Dish Price: {self.price}
        """

    class Meta:
        verbose_name_plural = "Menu Dishes"

class RecipeRequirement(models.Model):
    menu_item = models.ForeignKey(MenuItem, verbose_name="Dish Name", on_delete=models.CASCADE)
    ingredient = models.ForeignKey(Ingredient, verbose_name="Dish Ingredient", on_delete=models.CASCADE)
    quantity = models.FloatField(verbose_name="Quantity of Ingredient Required", default=0)

    def __str__(self):
        return f"""
        Dish: {self.menu_item.title},
        Ingredient: {self.ingredient.name},
        Quantity Required for Dish: {self.quantity}
        """

    class Meta:
        verbose_name_plural = "Recipe Requirements"

class Purchase(models.Model):
    menu_item = models.ForeignKey(MenuItem, verbose_name="Dish Name", on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True, verbose_name="Time Purchase Recorded")

    def __self__(self):
        return f"""
        Dish: {self.menu_item.title},
        Time Purchase Recorded: {self.timestamp}
        """

    class Meta:
        verbose_name_plural = "Purchases"
