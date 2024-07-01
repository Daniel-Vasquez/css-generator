import React from 'react'

export const FormFlex = ({ stylesFlex, setStylesFlex }) => {
  const {
    display,
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
  } = stylesFlex

  return (
    <div className="flex justify-center items-center flex-col w-full gap-7 bg-blue border-2 border-border rounded-xl py-5 px-4 my-4 mb-6 md:flex-row">
      <label htmlFor="display" className="flex items-center flex-col gap-3 text-sm font-semibold text-white">
        Display:
        <select
          id="display"
          className="bg-transparent border border-gray-300 text-white text-sm text-center rounded-lg focus:ring-golden focus:border-golden block w-full p-2"
          value={display}
          onChange={(e) => setStylesFlex({ ...stylesFlex, display: e.target.value })}
        >
          <option value="flex">Flex</option>
          <option value="block">block</option>
        </select>
      </label>

      <label htmlFor="direction" className="flex items-center flex-col gap-2 text-sm font-semibold text-white">
        Flex Direction:
        <select
          id="direction"
          className="bg-transparent border border-gray-300 text-white text-sm text-center rounded-lg focus:ring-golden focus:border-golden block w-full p-2 disabled:border-red-600 disabled:text-red-600 disabled:cursor-no-drop"
          value={flexDirection}
          onChange={(e) => setStylesFlex({ ...stylesFlex, flexDirection: e.target.value })}
          disabled={display === "block"}
        >
          <option value="row">row</option>
          <option value="row-reverse">row-reverse</option>
          <option value="column">column</option>
          <option value="column-reverse">column-reverse</option>
        </select>
      </label>

      <label htmlFor="justify" className="flex items-center flex-col gap-2 text-sm font-semibold text-white">
        Justify Content:
        <select
          id="justify"
          className="bg-transparent border border-gray-300 text-white text-sm text-center rounded-lg focus:ring-golden focus:border-golden block w-full p-2 disabled:border-red-600 disabled:text-red-600 disabled:cursor-no-drop"
          value={justifyContent}
          onChange={(e) => setStylesFlex({ ...stylesFlex, justifyContent: e.target.value })}
          disabled={display === "block"}
        >
          <option value="flex-start">flex-start</option>
          <option value="center">center</option>
          <option value="flex-end">flex-end</option>
          <option value="space-between">space-between</option>
          <option value="space-around">space-around</option>
          <option value="space-evenly">space-evenly</option>
        </select>
      </label>

      <label htmlFor="items" className="flex items-center flex-col gap-2 text-sm font-semibold text-white">
        Align Items:
        <select
          id="items"
          className="bg-transparent border border-gray-300 text-white text-sm text-center rounded-lg focus:ring-golden focus:border-golden block w-full p-2 disabled:border-red-600 disabled:text-red-600 disabled:cursor-no-drop"
          value={alignItems}
          onChange={(e) => setStylesFlex({ ...stylesFlex, alignItems: e.target.value })}
          disabled={display === "block"}
        >
          <option value="flex-start">flex-start</option>
          <option value="center">center</option>
          <option value="end">flex-end</option>
          <option value="stretch">stretch</option>
        </select>
      </label>

      <label htmlFor="wrap" className="flex items-center flex-col gap-2 text-sm font-semibold text-white">
        Flex Wrap:
        <select
          id="wrap"
          className="bg-transparent border border-gray-300 text-white text-sm text-center rounded-lg focus:ring-golden focus:border-golden block w-full p-2 disabled:border-red-600 disabled:text-red-600 disabled:cursor-no-drop"
          value={flexWrap}
          onChange={(e) => setStylesFlex({ ...stylesFlex, flexWrap: e.target.value })}
          disabled={display === "block"}
        >
          <option value="nowrap">no-wrap</option>
          <option value="wrap">wrap</option>
          <option value="wrap-reverse">wrap-reverse</option>
        </select>
      </label>
    </div>
  )
}
