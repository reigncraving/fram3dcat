from django.contrib import admin
from .models import(
Location,
Skills,
Field_of_work,
Tools,
Frame,
Frame_comment
)

admin.site.register(Location)
admin.site.register(Skills)
admin.site.register(Field_of_work)
admin.site.register(Tools)
admin.site.register(Frame)
admin.site.register(Frame_comment)
