from rest_framework import viewsets
from rest_framework import serializers, response

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
    # permission_classes = [IsAuthenticated]
    serializer_class = ListSerialzier
    queryset = Todos.objects.all()

    def update(self, request, *args, **kwargs):
        kwargs['partial'] = True
        return super().update(request, *args, **kwargs)

    def list(self, request, *args, **kwargs):
        resp = {}
        result = super().list(request, *args, **kwargs)
        resp['result'] = result.data
        return response.Response(resp)
