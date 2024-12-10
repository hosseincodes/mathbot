from rest_framework import permissions


class IsOwnerOrAdmin(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object or Admin.
    """

    def has_object_permission(self, request, view, obj):

        # Allow admin user
        if request.user and request.user.is_staff:
            return True

        # Write permissions are only allowed to the user itself
        return obj.username == str(request.user)
