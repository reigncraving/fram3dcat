from django import forms

class FrameForm(forms.Form):
    frameFile = forms.FileField(
        label='Select a file',
        help_text='max. 42 megabytes'
    )
