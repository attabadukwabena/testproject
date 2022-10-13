from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet

from twitter.models import Tweet
from twitter.serializers import TweetSerializer


def index(request):
    return render(request, 'twitter/index.html')


class TweetViewSet(ModelViewSet):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer
