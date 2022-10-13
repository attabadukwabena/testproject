from rest_framework import routers

from twitter.views import *


router = routers.DefaultRouter()
router.register('', TweetViewSet)

urlpatterns = router.urls

