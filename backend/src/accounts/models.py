from django.db import models
from django.contrib.auth.models import AbstractUser
from multiselectfield import MultiSelectField
from GlobalModels.models import Skills, Tools, Field_of_work
from GlobalModels.cleaner import avatar_cleanup



def upload_path(instance, filename):
    return '/'.join(str('avatar', instance.username) , filename )

# Create your models here.

#basic user
class User (AbstractUser):
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    first_name = models.CharField(max_length=100, default=' ', blank=True)
    last_name = models.CharField(max_length=100, default=' ', blank=True)
    date_joined =  models.DateTimeField(auto_now_add=True)
    last_logged_in = models.DateField(null=True, blank=True)
    avatar = models.ImageField(default='default.png', blank=True, null=True, upload_to='avatar', max_length=255)
    skills = MultiSelectField(choices=Skills.SKILL_CHOICES, default=' ', blank=True)
    work_fields = MultiSelectField(choices=Field_of_work.FIELD_CHOICES, default=' ', blank=True)
    tools = MultiSelectField(choices=Tools.TOOL_CHOICES, default=' ', blank=True)
    company_name = models.CharField(max_length=100, blank=True)
    position = models.CharField(max_length=100, blank=True)
    website = models.CharField(max_length=100, blank=True)
    address_line = models.CharField(max_length=100, blank=True)
    zip_code = models.CharField(max_length=20, blank=True)
    state = models.CharField(max_length=100, blank=True)
    country = models.CharField(max_length=100, blank=True)
    is_active = models.BooleanField(default=True)
    is_available = models.BooleanField(default=True)
    is_designer = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)

    def __str__(self):
        return self.username
