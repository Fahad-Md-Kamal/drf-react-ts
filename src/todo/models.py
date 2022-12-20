from django.db import models
from django.contrib.humanize.templatetags.humanize import naturaltime
from django.contrib.auth import get_user_model


class Todos(models.Model):
    name = models.CharField(max_length=255)
    owner = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    is_complete = models.BooleanField(default=False)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f'{self.name} - {naturaltime(self.updated_at)}'
    
    @property
    def updated_since(self):
        return naturaltime(self.updated_at)
    
    @property
    def created_since(self):
        return naturaltime(self.created_at)
