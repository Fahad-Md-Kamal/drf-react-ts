from rest_framework.routers import DefaultRouter
from django.urls import path, include

from todo.views import TodoViewsets

router = DefaultRouter()
router.register('', TodoViewsets)

urlpatterns = [
    path("/", include(router.urls)),
]
