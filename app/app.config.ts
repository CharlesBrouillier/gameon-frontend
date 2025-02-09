export default defineAppConfig({
  ui: {
    badge: {
      compoundVariants: [
        {
          color: 'primary',
          class: 'text-[var(--ui-bg)] bg-[var(--ui-bg-inverted)]'
        },
      ]
    },
    button: {
      slots: {
        base: [
          'bg-white cursor-pointer'
        ]
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: 'solid',
          class: 'bg-orange-500 hover:bg-orange-500/75 disabled:bg-orange-500 aria-disabled:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 border-2 border-black'
        },    
        {
          color: 'neutral',
          variant: 'outline',
          class: 'border-2 border-black hover:bg-neutral-200'
        }    
      ]
    },
    carousel: {
      variants: {
        active: {
          true: {
            dot: 'bg-orange-400',
          },
        },
      },
    },
    checkbox: {
      compoundVariants: [
        {
          color: 'primary',
          checked: true,
          class: 'bg-orange-400 ring-stone-900'
        },
      ]
    },
    select: {
      slots: {
        item: [
          'cursor-pointer'
        ]
      }
    },
    skeleton: {
      base: 'bg-neutral-400'
    },
    slider: {
      slots: {
        thumb: 'cursor-pointer'
      },
      variants: {
        color: {
          primary: {
            range: 'bg-orange-400',
            thumb: 'ring-orange-400 focus-visible:outline-orange-400/50'
          }
        }
      }
    },
    slideover: {
      slots: {
        footer: 'justify-end',
        close: 'cursor-pointer'
      }
    }
  }
})