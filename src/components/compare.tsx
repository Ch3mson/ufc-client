'use client'

import React, { useState, useEffect, useRef, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { predictMatch } from '@/app/actions/actions' // Adjust the import path as needed
import { fighterNames as importedFighterNames } from '@/constants/fighters'

// Fallback to an empty array if the import fails
const fighterNames: string[] = importedFighterNames || []

interface FighterSelectProps {
  value: string
  onChange: (value: string) => void
  placeholder: string
}

const FighterSelect: React.FC<FighterSelectProps> = ({ value, onChange, placeholder }) => {
  const [search, setSearch] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLUListElement>(null)

  const filteredFighters = useMemo<string[]>(
    () =>
      fighterNames.filter((name: string) =>
        name.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  )

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelectFighter = (fighter: string) => {
    setSearch(fighter)
    onChange(fighter)
    setIsOpen(false)
    inputRef.current?.blur() // Remove focus from the input
  }

  return (
    <div className="relative">
      <Input
        ref={inputRef}
        placeholder={placeholder}
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearch(e.target.value)
          setIsOpen(true)
          onChange('')
        }}
        onFocus={() => setIsOpen(true)}
      />
      <AnimatePresence>
        {isOpen && filteredFighters.length > 0 && (
          <motion.ul
            ref={dropdownRef}
            key="dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto"
          >
            {filteredFighters.map((fighter: string) => (
              <li
                key={fighter}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelectFighter(fighter)}
              >
                {fighter}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

interface PredictionResult {
  probability_A: number
  probability_B: number
}

const FighterInput: React.FC = () => {
  const [fighterA, setFighterA] = useState<string>('')
  const [fighterB, setFighterB] = useState<string>('')
  const [result, setResult] = useState<PredictionResult | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!fighterA || !fighterB) return
    setIsLoading(true)
    setResult(null)

    try {
      const data: PredictionResult = await predictMatch(fighterA, fighterB)
      setResult({
        probability_A: data.probability_A,
        probability_B: data.probability_B,
      })
    } catch (error) {
      console.error('Error:', error)
      // Handle error (e.g., show error message to user)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full max-w-md mx-auto mt-4"
    >
      <form onSubmit={handleSubmit} className="space-y-2">
        <FighterSelect
          value={fighterA}
          onChange={setFighterA}
          placeholder="Select Fighter A"
        />
        <FighterSelect
          value={fighterB}
          onChange={setFighterB}
          placeholder="Select Fighter B"
        />
        <Button
          type="submit"
          className="w-full mt-2"
          disabled={isLoading || !fighterA || !fighterB}
        >
          {isLoading ? 'Predicting...' : 'Predict'}
        </Button>
      </form>

      <AnimatePresence>
        {result && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mt-4 p-4 bg-gray-100 rounded-md"
          >
            <h3 className="text-lg font-semibold mb-2">Prediction Results:</h3>
            <p>
              {fighterA}: {result.probability_A.toFixed(2)}% chance of winning
            </p>
            <p>
              {fighterB}: {result.probability_B.toFixed(2)}% chance of winning
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default FighterInput