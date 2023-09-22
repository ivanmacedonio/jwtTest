from django.db import models

class Posts(models.Model):
    title = models.CharField(max_length=129)
    description = models.TextField(blank=True)
    
    def __str__(self):
        return self.title
