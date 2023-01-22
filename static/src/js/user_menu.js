/** @odoo-module **/

import { UserMenu } from "@web/webclient/user_menu/user_menu";
import { patch } from "@web/core/utils/patch";
import { registry } from "@web/core/registry";
const userMenuRegistry = registry.category("user_menuitems");

patch(UserMenu.prototype, "app_esprotech_custom.UserMenu", {
    setup() {
        this._super.apply(this, arguments);
        userMenuRegistry.remove("documentation");
        userMenuRegistry.remove("support");
        userMenuRegistry.remove("odoo_account");
        userMenuRegistry.remove("asset_asset");
        userMenuRegistry.remove("leave_debug");
        userMenuRegistry.remove("debug");
    },
    // getElements() {
    //     let ret = this._super.apply(this, arguments);
    //     return ret;
    // },
});