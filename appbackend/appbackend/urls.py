from django.contrib import admin
from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from mainapp.views import Protegida, Posts, Logout

urlpatterns = [
    path("admin/", admin.site.urls),
    path(
        "api/token/", jwt_views.TokenObtainPairView.as_view(), name="token_obtain_pair"
    ),
    path(
        "api/token/refresh/", jwt_views.TokenRefreshView.as_view(), name="token_refresh"
    ),
    path("test/", Posts.as_view(), name="Protegida"),
    path("logout/", Logout.as_view(), name="Logout"),
]
