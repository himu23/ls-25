from django.shortcuts import render
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from .models import Video, WatchLater, Like, Comment
from .serializers import UserSerializer, VideoSerializer, WatchLaterSerializer, LikeSerializer, CommentSerializer
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework import filters


# Create your views here.
class RegisterUser(APIView):
    def post(self, request):
        username = request.data['username']
        password = request.data['password']
        email = request.data.get('email', '')
        if User.objects.filter(username=username).exists():
            return Response({'error': 'Username already exists'}, status=400)
        user = User.objects.create_user(username=username, password=password, email=email)
        return Response({'message': 'User created successfully'})

# List all videos
class VideoList(generics.ListAPIView):
    queryset = Video.objects.all().order_by('-uploaded_at')
    serializer_class = VideoSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['title', 'description']
    def get_queryset(self):
        queryset = Video.objects.all().order_by('-uploaded_at')
        category = self.request.query_params.get('category')
        if category:
            queryset = queryset.filter(category__iexact=category)
        return queryset



# Upload video (user must be authenticated)
class UploadVideo(generics.CreateAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

# Get a single video
class VideoDetail(generics.RetrieveAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer

#login view
class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        return Response({
            'token': token.key,
            'user_id': token.user_id,
            'username': token.user.username
        })

# Add to Watch Later
class AddToWatchLater(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        video_id = request.data['video']
        WatchLater.objects.get_or_create(user=request.user, video_id=video_id)
        return Response({'message': 'Added to watch later'})

# Remove from Watch Later
class RemoveFromWatchLater(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        video_id = request.data['video']
        WatchLater.objects.filter(user=request.user, video_id=video_id).delete()
        return Response({'message': 'Removed from watch later'})

# List Watch Later
class WatchLaterList(generics.ListAPIView):
    serializer_class = VideoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Video.objects.filter(watchlater__user=self.request.user)

# Like Video
class LikeVideo(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        video_id = request.data['video']
        Like.objects.get_or_create(user=request.user, video_id=video_id)
        return Response({'message': 'Video liked'})

# Comment on Video
class CommentOnVideo(generics.CreateAPIView):
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

from rest_framework.response import Response
from rest_framework.views import APIView

class VideoComments(APIView):
    def get(self, request, pk):
        comments = Comment.objects.filter(video_id=pk).order_by('commented_at')
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)
