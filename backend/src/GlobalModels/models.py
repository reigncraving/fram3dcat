from django.contrib.auth import get_user_model
from django.db import models
from multiselectfield import MultiSelectField
from model_utils import Choices



def user_directory_path(instance, filename):

    # file will be uploaded to MEDIA_ROOT / user_<id>/<filename>
    return 'user_{0}/{1}'.format(instance.user.id, filename)


# Create your models here.
class Location (models.Model):
    address_line1 = models.CharField(max_length=100, blank=True)
    address_line2 = models.CharField(max_length=100, blank=True)
    zip_code = models.CharField(max_length=20, blank=True)
    state = models.CharField(max_length=100, blank=True)
    country = models.CharField(max_length=100, blank=True)
    #Coordinates...
    long = models.DecimalField(max_digits=8, decimal_places=3, null=True, blank=True)
    lat = models.DecimalField(max_digits=8, decimal_places=3, null=True, blank=True)
    def __str__(self):
        return self.address_line1

class Skills (models.Model):
    SKILL_CHOICES =(
        (' ', ' '),
        ('QUICKLEARNER', 'Quick learner'),
        ('ARTISTIC', 'Artistic skills'),
        ('TIME_MANAGEMENT', 'Time management'),
        ('TEAMWORK', 'Teamwork'),
        ('COMMUNICATION', 'Communication'),
        ('ENGINEERING', 'Engineering'),
    )

    class Meta:
        verbose_name_plural = "SKILL_CHOICES"

class Field_of_work (models.Model):
    FIELD_CHOICES = (
        (' ', ' '),
        ('RIGGING', 'Rigging'),
        ('MODELLING', 'Modeling'),
        ('VFX', 'Visual effects'),
        ('TEXTURING', 'Texturing'),
        ('ANIMATION', 'Animation'),
        ('FILM', 'Film and Media Arts'),
        ('GAME_DESIGN','Games design' ),
        ('RENDERING','Rendering artist'),
        ('LIGHTNING', 'Lightning artist'),
        ('BACKGROUND', 'Background artist'),
        ('GRAPHIC_DESING', 'Graphic design'),
        ('PRODUCT_DESIGN', 'Product design'),
        ('CHARACTER_DESIGN', 'Character design'),
        ('WEBSITE_DESIGNER', '3D website design'),
        ('INTERACTIVE_DESIGN', 'Interactive design'),
        ('CHARACTER_ANIMATATION', 'Character Animation'),
    )

    class Meta:
        verbose_name_plural = "Fields of work"

class Tools (models.Model):
    TOOL_CHOICES = (
        (' ', ' '),
        ('MAX', 'Autodesk 3ds Max'),
        ('MAYA', 'Autodesk Maya'),
        ('CINEMA', 'Cinema 4D'),
        ('AE', 'Adobe After Effects'),
        ('PS', 'Adobe Photoshop'),
        ('BLENDER', 'Blender'),
        ('LIGHTWAVE', 'LightWave'),
        ('ZBrush', 'ZBrush'),

    )
    class Meta:
        verbose_name_plural = "Tools"


class Frame (models.Model):
    title = models.CharField(max_length=100, blank=True)
    description = models.CharField(max_length=100, blank=True)
    author = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, null=True)
    rating = models.IntegerField(blank=True, null=True)
    # Comments FK
    number_of_comments = models.IntegerField(blank=True, null=True)
    likes = models.IntegerField(blank=True, null=True)
    views = models.IntegerField(blank=True, null=True)
    # tools = MultiSelectField(choices=Tools.TOOL_CHOICES, null=True, blank=True)
    # field_Of_Work = ManyToManyFields(choices=Field_of_work.FIELD_CHOICES, null=True, blank=True)
    frameFile = models.FileField(upload_to='frames/%Y/', null=True, blank=True)
    frame_picture = models.ImageField(default='darkCube.jpeg', blank=True, null=True)
    date_uploaded = models.DateTimeField(auto_now_add=True)
    last_moddified = models.DateTimeField(auto_now_add=True)
    #tags

    def __str__(self):
        return self.title

class Frame_comment(models.Model):
     post = models.ForeignKey('Frame',on_delete=models.CASCADE,related_name='comments', null=True)
     author = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, null=True, related_name='author')
     content = models.TextField()
     likes = models.IntegerField(blank=True, null=True)
     pub_date = models.DateTimeField(auto_now_add=True)

     def add_coment(self):
        self.pub_date = timezone.now()
        self.save()

     class Meta:
         ordering = ["pub_date"]
         verbose_name_plural = "Frame Comments"

     def __str__(self):
        return 'Comment {} by {}'.format(self.content, self.author)
