from django.urls import path
from .views import (
    RegisterUser, VideoList, UploadVideo, VideoDetail, AddToWatchLater, RemoveFromWatchLater, WatchLaterList,
    LikeVideo, CommentOnVideo, VideoComments
)
from .views import CustomAuthToken

urlpatterns = [
    path('register/', RegisterUser.as_view()),
    path('login/', CustomAuthToken.as_view()),
    path('videos/', VideoList.as_view()),
    path('videos/upload/', UploadVideo.as_view()),
    path('videos/<int:pk>/', VideoDetail.as_view()),
    path('watchlater/add/', AddToWatchLater.as_view()),
    path('watchlater/remove/', RemoveFromWatchLater.as_view()),
    path('watchlater/', WatchLaterList.as_view()),
    path('like/', LikeVideo.as_view()),
    path('comment/', CommentOnVideo.as_view()),
    path('videos/<int:pk>/comments/', VideoComments.as_view()),

]
