import * as React from "react"
import { Button } from "@/components/ui/button"
import { useClickSound } from "@/hooks/useClickSound"

/**
 * WithClickSound — opt-in wrapper for any clickable element.
 * Adds click sound only to its children. No global listener.
 *
 * Usage:
 *   import { WithClickSound } from "@/components/ui/click-sound"
 *
 *   <WithClickSound>
 *     <button onClick={handleClick}>Save</button>
 *   </WithClickSound>
 *
 *   // works with any element / custom Button:
 *   <WithClickSound>
 *     <Button variant="outline">Send</Button>
 *   </WithClickSound>
 *
 *   // renderless hook alternative:
 *   const { play } = useClickSound()
 *   <button onClick={() => { play(); handleClick() }}>Save</button>
 */
export function WithClickSound({
  children,
  disabled = false,
  sound = true,
  onClick,
  ...props
}) {
  const { play } = useClickSound()

  const handleClick = React.useCallback(
    (e) => {
      if (disabled || !sound) {
        onClick?.(e)
        return
      }
      play()
      onClick?.(e)
    },
    [disabled, sound, play, onClick]
  )

  // If single valid element child, clone and merge onClick
  if (React.isValidElement(children) && React.Children.count(children) === 1) {
    const child = children
    const childOnClick = child.props.onClick
    const isChildDisabled =
      disabled || child.props.disabled || child.props["aria-disabled"] === "true"

    return React.cloneElement(child, {
      ...props,
      onClick: (e) => {
        if (!isChildDisabled && sound) play()
        childOnClick?.(e)
        onClick?.(e)
      },
    })
  }

  // Fallback: wrap in span/div
  return (
    <span onClick={handleClick} {...props}>
      {children}
    </span>
  )
}

/**
 * SoundButton — drop-in replacement for Button with opt-in sound.
 * Sound is ON by default for this component; disable with `sound={false}`.
 *
 * Usage:
 *   import { SoundButton } from "@/components/ui/click-sound"
 *   <SoundButton onClick={handleClick}>Click me</SoundButton>
 *   <SoundButton sound={false}>Silent</SoundButton>
 */
export const SoundButton = React.forwardRef(function SoundButton(
  { onClick, sound = true, disabled, ...props },
  ref
) {
  const { play } = useClickSound()

  const handleClick = React.useCallback(
    (e) => {
      if (!disabled && sound) play()
      onClick?.(e)
    },
    [disabled, sound, play, onClick]
  )

  return <Button ref={ref} disabled={disabled} onClick={handleClick} {...props} />
})
SoundButton.displayName = "SoundButton"

export default WithClickSound
