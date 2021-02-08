from django.db import models
from multiselectfield import MultiSelectField
from GlobalModels.models import Skills, Tools, Field_of_work


# Create your models here.
class Job(models.Model):
    headline = models.CharField(max_length=255)
    description = models.CharField(max_length=255, blank=True)
    location = models.ManyToManyField('GlobalModels.Location', blank=True)
    #skills = MultiSelectField(choices=Skills.SKILL_CHOICES, null=True, blank=True)
    #field_Of_Work = MultiSelectField(choices=Field_of_work.FIELD_CHOICES, null=True, blank=True)
    body_text = models.TextField()
    salary = models.IntegerField(blank=True, null=True)
    pub_date = models.DateTimeField(auto_now_add=True)
    mod_date = models.DateTimeField(auto_now_add=True)
    due_date = models.DateTimeField()
    author = models.ForeignKey('accounts.User', on_delete=models.CASCADE, null=True)
    number_of_comments = models.IntegerField(blank=True, null=True)
    rating = models.IntegerField(blank=True, null=True)
    is_remote = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    submition_url = models.CharField(max_length=255)

    experience_choices = (
        ('JUNIOR', 'JUNIOR'),
        ('SENIOR', 'SENIOR'),
        ('INTERN', 'INTERN'),
        ('NULL', ' '),
    )
    experience = models.CharField(
        max_length=10,
        choices=experience_choices,
        default='',
        blank=True)

class Job_comment(models.Model):
     post = models.ForeignKey('Job',on_delete=models.CASCADE,related_name='comments', null=True)
     author = models.ForeignKey('accounts.User', on_delete=models.CASCADE, null=True)
     content = models.TextField()
     likes = models.IntegerField(blank=True, null=True)
     pub_date = models.DateTimeField(auto_now_add=True)

     def add_coment(self):
        self.pub_date = timezone.now()
        self.save()

     class Meta:
         ordering = ["pub_date"]
         verbose_name_plural = "Job Comments"

     def __str__(self):
        return 'Comment {} by {}'.format(self.content, self.author)
