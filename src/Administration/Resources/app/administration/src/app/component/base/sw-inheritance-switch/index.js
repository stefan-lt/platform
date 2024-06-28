/**
 * @package admin
 */

import { compatUtils } from '@vue/compat';
import template from './sw-inheritance-switch.html.twig';
import './sw-inheritance-switch.scss';

const { Component } = Shopware;

/**
 * @private
 */
Component.register('sw-inheritance-switch', {
    template,

    inject: {
        restoreInheritanceHandler: {
            from: 'restoreInheritanceHandler',
            default: null,
        },
        removeInheritanceHandler: {
            from: 'removeInheritanceHandler',
            default: null,
        },
    },

    props: {
        isInherited: {
            type: Boolean,
            required: true,
            default: false,
        },

        disabled: {
            type: Boolean,
            required: false,
            default: false,
        },
    },

    computed: {
        unInheritClasses() {
            return { 'is--clickable': !this.disabled };
        },
    },

    methods: {
        onClickRestoreInheritance() {
            if (this.disabled) {
                return;
            }
            this.$emit('inheritance-restore');

            if (!compatUtils.isCompatEnabled('INSTANCE_EVENT_EMITTER')) {
                if (this.restoreInheritanceHandler) {
                    this.restoreInheritanceHandler();
                }
            }
        },

        onClickRemoveInheritance() {
            if (this.disabled) {
                return;
            }
            this.$emit('inheritance-remove');

            if (!compatUtils.isCompatEnabled('INSTANCE_EVENT_EMITTER')) {
                if (this.removeInheritanceHandler) {
                    this.removeInheritanceHandler();
                }
            }
        },
    },
});
