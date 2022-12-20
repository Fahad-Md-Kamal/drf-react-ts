from rest_framework import viewsets
from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated

from todo.models import Todos

class ListSerialzier(serializers.ModelSerializer):
    
    class Meta:
        model = Todos
        fields = (
            'id', 
            'name', 
            'is_complete', 
            'created_at', 
            'updated_at', 
            'created_since', 
            'updated_since'
        )

        
class TodoViewsets(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = ListSerialzier
    queryset = Todos.objects.all()

    def update(self, request, *args, **kwargs):
        kwargs['partial'] = True
        return super().update(request, *args, **kwargs)