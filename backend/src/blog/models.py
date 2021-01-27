from django.db import models

def upload_path(instace, filename):
    return '/'.join(instance.headline, 'headline_photo', filename )

class Story(models.Model):
    headline = models.CharField(max_length=255)
    body_text = models.TextField()
    pub_date = models.DateTimeField(auto_now_add=True)
    mod_date = models.DateTimeField(auto_now_add=True)
    description = models.CharField(max_length=255, blank=True)
    author = models.ForeignKey('accounts.User', on_delete=models.CASCADE, null=True)
    number_of_comments = models.IntegerField(blank=True, null=True)
    rating = models.IntegerField(blank=True, null=True)
    headline_photo = models.ImageField(upload_to=upload_path, blank=True, null=True)
    #tags???

    def write(self):
        self.pub_date = timezone.now()
        self.save()

    class Meta:
        ordering = ["pub_date"]
        verbose_name_plural = "Stories"

    def __str__(self):
        return self.headline


class Comment(models.Model):
     post = models.ForeignKey('Story',on_delete=models.CASCADE,related_name='comments' , null=True)
     author = models.ForeignKey('accounts.User', on_delete=models.CASCADE, null=True)
     content = models.TextField()
     likes = models.IntegerField(blank=True, null=True)
     pub_date = models.DateTimeField(auto_now_add=True)

     def add_coment(self):
        self.pub_date = timezone.now()
        self.save()

     class Meta:
         ordering = ["pub_date"]
         verbose_name_plural = "Comments"

     def __str__(self):
        return 'Comment {} by {}'.format(self.content, self.author)



# must add eny new attribute to api/serializers.py under fields(...)
