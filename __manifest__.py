# -*- coding: utf-8 -*-

{
    'name': 'app_esprotech_custom',
    'category': 'Productivity',
    'version': '1.0.0',
    'summary': 'Personalizando Odoo',
    'sequence': 30,
    'author': 'esprotech.org',
    'company': 'EsproTech',
    'depends': [
        'base_setup',
        'auth_signup',
        'web'
    ],
    'data': [
        'views/app_esprotech_custom_views.xml',
    ],
        'assets': {
        'web.assets_backend': [
            'app_esprotech_custom/static/src/js/user_menu.js',
        ],
    },
    'appication': True,
    'license': 'LGPL-3',
}