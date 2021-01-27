import os
from django.core.files.storage import default_storage
from django.db.models import ImageField


def avatar_cleanup(sender, **kwargs):
    for avatar in sender._meta.get_all_field_names():
        try:
            field = sender._meta.get_field(avatar)
        except:
            field = None
        if field and isinstance(field, avatar):
            inst = kwargs['instance']
            f = getattr(inst, avatar)
            m = inst.__class__._default_manager
            if hasattr(f, 'path') and os.path.exists(f.path)\
            and not m.filter(**{'%s__exact' % avatar: getattr(inst, avatar)})\
            .exclude(pk=inst._get_pk_val()):
                try:
                    default_storage.delete(f.path)
                except:
                    pass
