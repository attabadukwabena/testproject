from django.db import models


class Tweet(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    message = models.CharField(max_length=50)
    name = models.CharField(max_length=50)

    class Meta:
        ordering = ['-created_at', '-name']
